module.exports = {
    title: 'Documentation',
    tagline: 'Your Brand. Enabled.',
    url: 'https://convai.studio',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'Datomar Labs Inc.',
    projectName: 'Convai Platform Documentation',
    themeConfig: {
        navbar: {
            title: 'Documentation',
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
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};