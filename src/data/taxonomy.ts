export const CASE_STUDY_TAGS = [
  "KPI Governance",
  "Contact Centre Analytics",
  "Workforce Analytics",
  "Reporting Automation",
  "Data Quality",
  "Executive Reporting",
  "Scenario Modelling",
  "Provider Calibration",
] as const;

export type CaseStudyTag = (typeof CASE_STUDY_TAGS)[number];

export const CASE_STUDY_TAG_SET = new Set<string>(CASE_STUDY_TAGS);

export const toTagValue = (tag: string): string =>
  tag.toLowerCase().replace(/\s+/g, "-");
