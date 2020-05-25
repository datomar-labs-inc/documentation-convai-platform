module.exports = {
    title: 'Convai',
    tagline: 'Your Brand. Enabled.',
    url: 'https://docs.convai.dev',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'datomar-labs-inc',
    projectName: 'documentation-convai-platform',
    themeConfig: {
        disableDarkMode: true,
        announcementBar: {
            id: 'work_in_progress',
            content: 'The documentation is still a work in progress.',
            backgroundColor: '#1a2a5f',
            textColor: '#000000'
        },
        navbar: {
            title: 'Convai',
            logo: {
                alt: 'Convai',
                src: 'img/logo.png'
            },
            links: [
                {
                    to: '/convai-studio/introduction',
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
                    routeBasePath: '/',
                    homePageId: 'convai-studio/introduction',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: ''
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};