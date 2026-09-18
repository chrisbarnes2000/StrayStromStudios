import { describe, it, expect } from 'vitest';
import { astroNightProfile, founderVentures } from '../../src/data/mockData';
import { NAV_SECTIONS } from '../../src/App';

describe('Authoritative Persona & 6-Venture Portfolio Invariants', () => {
  it('enforces Christopher Barnes ex-Citi SRE identity invariants', () => {
    expect(astroNightProfile.realName).toContain('Christopher');
    expect(astroNightProfile.pronouns).toBe('He/They');
    expect(astroNightProfile.heroTagline).toBe('I see systems where others see only code.');
    expect(astroNightProfile.sponsorshipStatement).toBeDefined();
    expect(astroNightProfile.cvDetails.workExperience[0].role).toContain('Equity Derivatives');
    expect(astroNightProfile.cvDetails.workExperience[0].bullets.some(b => b.includes('99.98%'))).toBe(true);
    expect(astroNightProfile.cvDetails.workExperience[0].bullets.some(b => b.includes('$2.5M+/day'))).toBe(true);
  });

  it('verifies all 6 ventures exist with required fields and categories', () => {
    expect(founderVentures.length).toBe(6);
    
    const projects = founderVentures.map(v => v.project);
    expect(projects).toContain('RapportVerse');
    expect(projects).toContain('Ascend ATS');
    expect(projects).toContain('Mentra Collective');
    expect(projects).toContain('ODEN Nexus');
    expect(projects).toContain('MiniBarnMaster');
    expect(projects).toContain('LifeCreatesArt');

    // Verify categories
    const categories = founderVentures.map(v => v.category);
    expect(categories).toContain('flagship');
    expect(categories).toContain('investigative');
    expect(categories).toContain('climate');
    expect(categories).toContain('fine-art');
  });

  it('validates AstroNight gaming profile mapping', () => {
    expect(astroNightProfile.gamingProfile).toBeDefined();
    expect(astroNightProfile.gamingProfile?.games.length).toBe(3);
    const gameIds = astroNightProfile.gamingProfile?.games.map(g => g.id);
    expect(gameIds).toContain('hytale');
    expect(gameIds).toContain('minecraft');
    expect(gameIds).toContain('chess');
  });

  it('validates dynamic navigation header sections and DOM element target invariants', () => {
    expect(NAV_SECTIONS.length).toBe(6);
    const sectionIds = NAV_SECTIONS.map(s => s.id);
    expect(sectionIds).toEqual([
      'overview',
      'ventures',
      'experience',
      'competencies',
      'cognitive',
      'consulting'
    ]);

    const targetElements = NAV_SECTIONS.map(s => s.elementId);
    expect(targetElements).toEqual([
      'astronight-profile-card',
      'ventures-section',
      'experience-section',
      'competencies-section',
      'neurodiversity-section',
      'consulting-section'
    ]);
  });
});
