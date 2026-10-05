// Mirrors the downloadable CV (branding/cp_balog.pdf). Employer names are
// shown here on purpose: a CV is the factual record recruiters expect. The
// rest of the site uses industries only.
export const resume = {
  profile:
    'DevOps consultant with 13+ years of experience across banking and fintech, telecommunications, and health insurance. Specialised in Kubernetes platforms, CI/CD modernisation, infrastructure as code, and DevSecOps. Combines hands-on engineering with technical leadership and developer enablement in complex, regulated enterprise environments.',

  experience: [
    {
      employer: 'Dôvera zdravotná poisťovňa, a.s.',
      role: 'DevOps Consultant',
      period: 'September 2023 – Present',
      highlights: [
        'Took ownership of the CI/CD and development platform after the responsible engineer departed, keeping delivery running for about 50 developers.',
        'Replaced a non-upgradable RKE1 environment with VMware Tanzu Kubernetes Grid, using ClusterAPI and ArgoCD.',
        'Built reusable GitLab CI/CD pipelines for about 250 .NET, ASP.NET, Node.js, and React components across 50 repositories, with security scanning and quality gates.',
      ],
    },
    {
      employer: 'O2 Slovakia s.r.o.',
      role: 'DevOps Engineer',
      period: 'May 2019 – Present',
      highlights: [
        'Sole DevOps engineer supporting more than 40 developers, with technical ownership of CI/CD and non-production Kubernetes environments.',
        'Re-engineered delivery from Jenkins and Groovy to reusable GitLab CI/CD components, scaling from about 70 to more than 150 repositories.',
      ],
    },
    {
      employer: 'Multitude IT Labs s.r.o.',
      role: 'DevOps/SRE Engineer',
      period: 'January 2022 – April 2024',
      note: 'Worked in parallel with my ongoing role at O2.',
      highlights: [
        'Migrated repositories and CI/CD pipelines from Atlassian Bitbucket and Bamboo to GitHub and GitHub Actions.',
        'Supported the move from on-premises Kubernetes to four AKS clusters covering development, test, production, and shared platform services.',
        'Developed reusable GitHub Actions and managed Azure infrastructure with Terraform, with platform configuration automated through Ansible.',
      ],
    },
    {
      employer: 'Deutsche Telekom Pan-Net, s.r.o.',
      role: 'Full-stack Developer',
      period: 'October 2018 – April 2019',
      highlights: [
        'Developed a portal for managing secure cloud services on OpenStack for companies in the Deutsche Telekom Group.',
      ],
    },
    {
      employer: 'Slovenská sporiteľňa, a.s.',
      role: 'IT Technical Lead',
      period: 'May 2016 – September 2018',
      highlights: [
        'Led the onboarding of development teams onto centralized GitLab and Nexus platforms, replacing fragmented source-control and artifact-management practices.',
        "Championed the bank's adoption of DevOps by establishing its first standardized CI/CD pipelines.",
      ],
    },
    {
      employer: 'T-Systems Slovakia s.r.o.',
      role: 'IT Application Specialist',
      period: 'January 2013 – December 2014',
      highlights: [
        'Operated highly available, business-critical applications for Shell, including a global SAP-integrated tax-calculation platform and a password-management service covering tens of thousands of servers.',
      ],
    },
  ],

  skills: [
    {
      area: 'Cloud and platforms',
      items: 'Azure, Kubernetes (AKS, RKE, Tanzu), Cluster API, Linux, Windows Server',
    },
    {
      area: 'Infrastructure and GitOps',
      items: 'Terraform, Ansible, Helm, Argo CD, HashiCorp Vault, networking, ingress, DNS, certificates',
    },
    {
      area: 'CI/CD and development',
      items: 'GitLab CI/CD, GitHub Actions, Jenkins, Bamboo, Bash, PowerShell, Python, Java',
    },
    {
      area: 'Security and quality',
      items: 'DevSecOps, Trivy, SonarQube, SAST, dependency and container scanning, quality gates',
    },
    {
      area: 'Observability',
      items: 'Prometheus, Grafana, Elastic Stack, Zabbix',
    },
    {
      area: 'Containers and artifacts',
      items: 'Docker, Podman, Harbor, Nexus Repository',
    },
  ],

  education: [
    {
      school: 'Technical University of Košice',
      degree: "Master's, Industrial Engineering and Management",
      period: '2011 – 2013',
    },
    {
      school: 'Technical University of Košice',
      degree: "Bachelor's, Informatics",
      period: '2008 – 2011',
    },
  ],

  languages: ['English (fluent)', 'Slovak (native)'],
};
