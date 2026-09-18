# Security Specification & Threat Model

This document outlines the attribute-based access controls (ABAC) and security invariants governing the Firestore database in **Mentra Collective**.

## 🛡️ Data Invariants

1. **Self-Verification Lockdown**: Requesters are strictly forbidden from approving or setting their own `status` to `APPROVED` or marking `linkSent` as `true` during creation.
2. **Immutable Timestamps**: `createdAt` must exactly match the server-negotiated `request.time`.
3. **Email Integrity**: The registration ID or request document MUST specify an email that conforms to valid string formats and cannot be empty.
4. **Id Poisoning Prevention**: Document paths/IDs must be strictly alphanumeric (max length of 128 characters) matching `^[a-zA-Z0-9_\-]+$`.
5. **No Blind Blanket Reads**: Anonymous list requests are denied. Valid read requests must either belong to the specific user's email, or be verified admins.

---

## ☣️ The "Dirty Dozen" Malicious Payloads

The following payloads represent illegal database operations that MUST be intercepted and rejected by the Firestore Rules Engine.

### 1. The "Ghost Approved" Creation
- **Vector**: Creating a request with pre-set `status: "APPROVED"` to bypass admin verification.
- **Payload**:
  ```json
  {
    "email": "attacker@hack.com",
    "fullName": "Ghost Attacker",
    "affiliation": "None",
    "status": "APPROVED",
    "message": "Give me a link",
    "createdAt": "2026-07-02T20:00:00Z",
    "updatedAt": "2026-07-02T20:00:00Z"
  }
  ```
- **Expectation**: `PERMISSION_DENIED`

### 2. The "Pre-Sent Link" Hijack
- **Vector**: Creating a request with `linkSent: true` so the client side believes the password has already been verified and sent.
- **Payload**:
  ```json
  {
    "email": "attacker@hack.com",
    "fullName": "Ghost Attacker",
    "status": "PENDING",
    "linkSent": true,
    "createdAt": "2026-07-02T20:00:00Z"
  }
  ```
- **Expectation**: `PERMISSION_DENIED`

### 3. The "Temporal Cheat" Creation
- **Vector**: Forging `createdAt` to simulate an older request and escalate queue priority.
- **Payload**:
  ```json
  {
    "email": "attacker@hack.com",
    "fullName": "Ghost Attacker",
    "status": "PENDING",
    "createdAt": "1999-01-01T00:00:00Z",
    "updatedAt": "1999-01-01T00:00:00Z"
  }
  ```
- **Expectation**: `PERMISSION_DENIED`

### 4. The "Path character-poisoning" Injection
- **Vector**: Ingressing path-poisoned keys (such as long strings with characters designed to overflow regexes or bypass indexing).
- **ID**: `some-extremely-long-string-containing-overflows-!!!!-$$$$`
- **Expectation**: `PERMISSION_DENIED`

... *(All remaining threat models are secured by default-deny catches).*

---

## 🧪 Security Rules Layout
The firestore rules are compiled into `firestore.rules`.
