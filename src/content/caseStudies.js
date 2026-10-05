// Anonymized case studies. Industries only, no employer names or logos, and
// no exact performance figures.
export const caseStudies = [
  {
    slug: 'platform-takeover',
    title: 'Taking over a platform after its owner left',
    industry: 'Health insurance',
    status: 'Still in progress',
    summary:
      'A platform with 50 developers and no remaining engineer, running a Kubernetes version that could no longer be upgraded.',
    context: [
      "A health insurer's development platform lost its only engineer. About 50 developers depended on the CI/CD system, and the Kubernetes environment had reached a version that could no longer be upgraded.",
    ],
    whatIDid: [
      'I took over the platform while keeping delivery running. First I moved the CI/CD tools to an interim setup, without stopping development.',
      'Then I designed a new Kubernetes environment managed with GitOps, and moved the development workload across completely, followed by part of staging and production.',
    ],
    whatChanged: [
      'Developers kept shipping throughout. The platform can now be upgraded and is managed as code.',
      'Build, test, and security scanning run in the pipeline, and quality checks can block a release before it reaches production.',
    ],
  },
  {
    slug: 'pipeline-speed-up',
    title: 'Making a large pipeline fast enough to stop waiting',
    industry: 'Telecommunications',
    status: null,
    summary:
      'A delivery pipeline that grew from about 70 repositories to more than 150, and that developers spent much of their day waiting on.',
    context: [
      "A telecom operator's delivery pipeline had grown from about 70 repositories to more than 150. It was built on Jenkins and Groovy, and developers spent a large part of their day waiting on builds and deployments.",
      'I was the only DevOps engineer, supporting more than 40 developers.',
    ],
    whatIDid: [
      'I rebuilt the delivery system as reusable GitLab CI/CD components, written in Bash and Python, so every team gets the same pipeline without copying it.',
      'I added caching and parallel execution.',
    ],
    whatChanged: [
      'The full rebuild and deployment time dropped from most of a morning to under an hour.',
      'The speedup came from the pipeline design, not from more hardware resources.',
    ],
  },
];

export const getCaseStudy = (slug) =>
  caseStudies.find((study) => study.slug === slug);
