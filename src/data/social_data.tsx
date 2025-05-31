import { DevtoIcon } from '@/components/icons/devto'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { MailIcon } from '@/components/icons/mail'
import { WebIcon } from '@/components/icons/web'
import { XIcon } from '@/components/icons/x'
import { BlogIcon } from '@/components/icons/blog'
import { BlueSkyIcon } from '@/components/icons/bluesky'

export const SOCIAL_DATA = {
  name: 'Clelia Astra Bertelli',
  initials: 'CAB',
  avatar: '/assets/avatar.jpg',
  about: 'Hello world, I\'m Clelia, an Open Source engineer working for LlamaIndex! I\'m extremely passionate about AI, and I\'m committed to build the tooling and the foundations so that everybody can access it🥰. I spend most of my time writing python code and I mostly live on GitHub repositories, but I also enjoy walks, traveling and art!🎨',
  contacts: [
    {
      title: 'Portfolio',
      url: 'https://clelia.dev',
      icon: WebIcon
    },
    {
      title: 'Email',
      url: 'mailto:astraberte9@gmail.com',
      icon: MailIcon
    },
    {
      title: 'Blog',
      url: 'https://clelia.dev/blog',
      icon: BlogIcon
    },
  ],
  socials: [
    {
      title: 'GitHub',
      url: 'https://github.com/AstraBert',
      icon: GithubIcon
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/clelia-astra-bertelli-583904297/',
      icon: LinkedinIcon
    },
    {
      title: 'BlueSky',
      url: 'https://bsky.app/profile/cle-does-things.bsky.social',
      icon: BlueSkyIcon
    },
    {
      title: 'X (formerly Twitter)',
      url: 'https://x.com/itsclelia',
      icon: XIcon
    },
    {
      title: 'Dev Community',
      url: 'https://dev.to/astrabert',
      icon: DevtoIcon
    },
  ],
}
