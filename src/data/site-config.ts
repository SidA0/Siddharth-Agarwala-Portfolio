export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Siddharth Agarwala',
    subtitle: 'Mechanical Engineer',
    description: 'Engineering and Photography Portfolio',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Photography',
            href: 'https://photos.google.com/'
        }
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Connect With me on LinkedIn',
            href: 'https://www.linkedin.com/in/siddharth-agarwala/'
        },
    ],
    hero: {
        title: '',
        text: "I am a sophomore mechanical engineering student at the University of Texas at Austin with experience in design for manufacturing, simulation, project management, machining, and constructing physical prototypes. I am interested in pursuing automotive engineering, aerospace engineering, robotics, and manufacturing.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
