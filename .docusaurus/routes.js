import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', '16e'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', 'df2'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '928'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', '796'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', '63c'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', 'ef7'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '3b6'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', '337'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', 'a9b'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post', '34f'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post', '502'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post', 'f5c'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', '0a9'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus', '3f0'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook', '982'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello', '8a6'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola', 'b80'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome', 'a24'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', 'fa5'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '6f9'),
    routes: [
      {
        path: '/docs/docs/Backup/Configuring Veeam',
        component: ComponentCreator('/docs/docs/Backup/Configuring Veeam', '8ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Backup/Installatation of Veaam',
        component: ComponentCreator('/docs/docs/Backup/Installatation of Veaam', '293'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Backup/Introduction',
        component: ComponentCreator('/docs/docs/Backup/Introduction', '581'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/backup',
        component: ComponentCreator('/docs/docs/category/backup', 'afd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/configuration-management',
        component: ComponentCreator('/docs/docs/category/configuration-management', 'e31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/continous-integration',
        component: ComponentCreator('/docs/docs/category/continous-integration', '679'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/disaster-recovery',
        component: ComponentCreator('/docs/docs/category/disaster-recovery', 'e5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/getting-started',
        component: ComponentCreator('/docs/docs/category/getting-started', 'c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/infrastructure-as-a-code',
        component: ComponentCreator('/docs/docs/category/infrastructure-as-a-code', '525'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/monitoring',
        component: ComponentCreator('/docs/docs/category/monitoring', 'f10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/secrets',
        component: ComponentCreator('/docs/docs/category/secrets', 'aec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/single-sign-on-with-keycloak',
        component: ComponentCreator('/docs/docs/category/single-sign-on-with-keycloak', 'e0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/docs/category/tutorial---basics', 'ab3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/docs/category/tutorial---extras', 'a37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Configuration Management/Ansible',
        component: ComponentCreator('/docs/docs/Configuration Management/Ansible', 'd49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Configuration Management/Configuring AWX',
        component: ComponentCreator('/docs/docs/Configuration Management/Configuring AWX', 'baa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Configuration Management/Installing AWX',
        component: ComponentCreator('/docs/docs/Configuration Management/Installing AWX', 'fab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Configuration Management/introduction',
        component: ComponentCreator('/docs/docs/Configuration Management/introduction', '181'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Configuration Management/Serverspec',
        component: ComponentCreator('/docs/docs/Configuration Management/Serverspec', '7a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Continous Integration/Configuring Jenkins Pipeline/AWX Pipeline',
        component: ComponentCreator('/docs/docs/Continous Integration/Configuring Jenkins Pipeline/AWX Pipeline', '664'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Continous Integration/Configuring Jenkins Pipeline/Infrastructure Pipeline',
        component: ComponentCreator('/docs/docs/Continous Integration/Configuring Jenkins Pipeline/Infrastructure Pipeline', 'ad5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Continous Integration/Configuring Jenkins Pipeline/Serverspec Pipeline',
        component: ComponentCreator('/docs/docs/Continous Integration/Configuring Jenkins Pipeline/Serverspec Pipeline', 'e10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Continous Integration/Installation of Jenkins',
        component: ComponentCreator('/docs/docs/Continous Integration/Installation of Jenkins', '998'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Continous Integration/overview',
        component: ComponentCreator('/docs/docs/Continous Integration/overview', '8ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Disaster Recovery/CommingSoon',
        component: ComponentCreator('/docs/docs/Disaster Recovery/CommingSoon', 'ba4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Getting Started/Requirements',
        component: ComponentCreator('/docs/docs/Getting Started/Requirements', '1c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Infrastructure as a Code/Introduction',
        component: ComponentCreator('/docs/docs/Infrastructure as a Code/Introduction', '16d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Infrastructure as a Code/Terraform/TerraformModule/Add Developer roles and Access',
        component: ComponentCreator('/docs/docs/Infrastructure as a Code/Terraform/TerraformModule/Add Developer roles and Access', '9eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Infrastructure as a Code/Terraform/TerraformModule/Google kubernetes Engine Cluster',
        component: ComponentCreator('/docs/docs/Infrastructure as a Code/Terraform/TerraformModule/Google kubernetes Engine Cluster', 'a7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Infrastructure as a Code/Terraform/TerraformModule/root',
        component: ComponentCreator('/docs/docs/Infrastructure as a Code/Terraform/TerraformModule/root', '751'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Infrastructure as a Code/Terraform/TerraformModule/Workstation',
        component: ComponentCreator('/docs/docs/Infrastructure as a Code/Terraform/TerraformModule/Workstation', 'af7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/intro',
        component: ComponentCreator('/docs/docs/intro', 'e37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Monitoring/Configuration of Grafana Dashboards',
        component: ComponentCreator('/docs/docs/Monitoring/Configuration of Grafana Dashboards', 'ab2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Monitoring/ExposeMetrics',
        component: ComponentCreator('/docs/docs/Monitoring/ExposeMetrics', '1d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Monitoring/Installation of Grafana',
        component: ComponentCreator('/docs/docs/Monitoring/Installation of Grafana', 'd9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Monitoring/Installation of Prometheus',
        component: ComponentCreator('/docs/docs/Monitoring/Installation of Prometheus', 'cc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Monitoring/overview',
        component: ComponentCreator('/docs/docs/Monitoring/overview', '96f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Secrets/CentralizedSecret',
        component: ComponentCreator('/docs/docs/Secrets/CentralizedSecret', 'd72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Secrets/Configure Vault',
        component: ComponentCreator('/docs/docs/Secrets/Configure Vault', '335'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Secrets/Install Vault',
        component: ComponentCreator('/docs/docs/Secrets/Install Vault', '6f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Secrets/Integrate Vault with helm',
        component: ComponentCreator('/docs/docs/Secrets/Integrate Vault with helm', '475'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Secrets/Integrate Vault with Jenkins',
        component: ComponentCreator('/docs/docs/Secrets/Integrate Vault with Jenkins', '88d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Single Sign-On with Keycloak/Installation & Configuration of Keycloak',
        component: ComponentCreator('/docs/docs/Single Sign-On with Keycloak/Installation & Configuration of Keycloak', '879'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Single Sign-On with Keycloak/Integration with AWX',
        component: ComponentCreator('/docs/docs/Single Sign-On with Keycloak/Integration with AWX', '9bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Single Sign-On with Keycloak/Integration with Grafana',
        component: ComponentCreator('/docs/docs/Single Sign-On with Keycloak/Integration with Grafana', '106'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/Single Sign-On with Keycloak/Overview',
        component: ComponentCreator('/docs/docs/Single Sign-On with Keycloak/Overview', 'b53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/docs/tutorial-basics/congratulations', '842'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/docs/tutorial-basics/create-a-blog-post', '646'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/docs/tutorial-basics/create-a-document', '6ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/docs/tutorial-basics/create-a-page', 'b34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/docs/tutorial-basics/deploy-your-site', 'bed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/docs/tutorial-basics/markdown-features', '6f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/docs/tutorial-extras/manage-docs-versions', '055'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/docs/tutorial-extras/translate-your-site', '946'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '6d0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
