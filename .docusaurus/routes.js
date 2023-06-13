import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '7f7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c08'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '482'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3c4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0e6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '38f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '2d9'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c72'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '550'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '221'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '212'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '975'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'be1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '03b'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'd19'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'f0d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '2ba'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '26b'),
    routes: [
      {
        path: '/docs/Backup/Configuring Veeam',
        component: ComponentCreator('/docs/Backup/Configuring Veeam', 'e28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Backup/Installatation of Veaam',
        component: ComponentCreator('/docs/Backup/Installatation of Veaam', 'a07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Backup/Introduction',
        component: ComponentCreator('/docs/Backup/Introduction', 'f0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/backup',
        component: ComponentCreator('/docs/category/backup', 'bb2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/configuration-management',
        component: ComponentCreator('/docs/category/configuration-management', 'b53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/continous-integration',
        component: ComponentCreator('/docs/category/continous-integration', '620'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/disaster-recovery',
        component: ComponentCreator('/docs/category/disaster-recovery', 'f2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/infrastructure-as-a-code',
        component: ComponentCreator('/docs/category/infrastructure-as-a-code', '400'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/monitoring',
        component: ComponentCreator('/docs/category/monitoring', 'f80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/single-sign-on-with-keycloak',
        component: ComponentCreator('/docs/category/single-sign-on-with-keycloak', '4e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/Ansible',
        component: ComponentCreator('/docs/Configuration Management/Ansible', 'f41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/Configuring AWX',
        component: ComponentCreator('/docs/Configuration Management/Configuring AWX', 'cc3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/Installing AWX',
        component: ComponentCreator('/docs/Configuration Management/Installing AWX', '8f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Configuration Management/introduction',
        component: ComponentCreator('/docs/Configuration Management/introduction', 'b7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Continous Integration/Installation of Jenkins',
        component: ComponentCreator('/docs/Continous Integration/Installation of Jenkins', '0bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Continous Integration/overview',
        component: ComponentCreator('/docs/Continous Integration/overview', '6f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Disaster Recovery/CommingSoon',
        component: ComponentCreator('/docs/Disaster Recovery/CommingSoon', '17d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting Started/Requirements',
        component: ComponentCreator('/docs/Getting Started/Requirements', 'def'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Infrastructure as a Code/Introduction',
        component: ComponentCreator('/docs/Infrastructure as a Code/Introduction', '3fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Infrastructure as a Code/Terraform/TerraformModule/Add Developer roles and Access',
        component: ComponentCreator('/docs/Infrastructure as a Code/Terraform/TerraformModule/Add Developer roles and Access', '499'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Infrastructure as a Code/Terraform/TerraformModule/Google kubernetes Engine Cluster',
        component: ComponentCreator('/docs/Infrastructure as a Code/Terraform/TerraformModule/Google kubernetes Engine Cluster', '572'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Infrastructure as a Code/Terraform/TerraformModule/root',
        component: ComponentCreator('/docs/Infrastructure as a Code/Terraform/TerraformModule/root', '889'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Infrastructure as a Code/Terraform/TerraformModule/Workstation',
        component: ComponentCreator('/docs/Infrastructure as a Code/Terraform/TerraformModule/Workstation', 'e06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/Configuration of Grafana Dashboards',
        component: ComponentCreator('/docs/Monitoring/Configuration of Grafana Dashboards', '541'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/ExposeMetrics',
        component: ComponentCreator('/docs/Monitoring/ExposeMetrics', '190'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/Installation of Grafana',
        component: ComponentCreator('/docs/Monitoring/Installation of Grafana', '3a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/Installation of Prometheus',
        component: ComponentCreator('/docs/Monitoring/Installation of Prometheus', '88a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Monitoring/overview',
        component: ComponentCreator('/docs/Monitoring/overview', 'a93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Single Sign-On with Keycloak/Installation & Configuration of Keycloak',
        component: ComponentCreator('/docs/Single Sign-On with Keycloak/Installation & Configuration of Keycloak', '1ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Single Sign-On with Keycloak/Integration with AWX',
        component: ComponentCreator('/docs/Single Sign-On with Keycloak/Integration with AWX', '0e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Single Sign-On with Keycloak/Integration with Grafana',
        component: ComponentCreator('/docs/Single Sign-On with Keycloak/Integration with Grafana', '5cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Single Sign-On with Keycloak/Overview',
        component: ComponentCreator('/docs/Single Sign-On with Keycloak/Overview', 'def'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '33b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];