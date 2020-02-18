module.exports = {
    title: 'Convai',
    tagline: 'Your Brand. Enabled.',
    url: 'https://datomar-labs-inc.github.io',
    baseUrl: '/documentation-convai-platform/',
    favicon: 'img/favicon.ico',
    organizationName: 'datomar-labs-inc',
    projectName: 'documentation-convai-platform',
    themeConfig: {
        navbar: {
            title: 'Convai',
            logo: {
                alt: 'Convai',
                src: 'img/logo.png'
            },
            links: [
                {
                    to: 'docs/nodes/introduction',
                    label: 'Docs',
                    position: 'left'
                }
            ]
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Datomar Labs Inc.`
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic', {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/datomar-labs-inc/documentation-convai-platform'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};