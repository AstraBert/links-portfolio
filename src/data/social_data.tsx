import { DevtoIcon } from '@/components/icons/devto'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { MailIcon } from '@/components/icons/mail'
import { WebIcon } from '@/components/icons/web'
import { XIcon } from '@/components/icons/x'
import { BlogIcon } from '@/components/icons/blog'
import { BlueSkyIcon } from '@/components/icons/bluesky'
import { MastodonIcon } from '@/components/icons/mastodon'

export const SOCIAL_DATA = {
  name: 'Clelia Astra Bertelli',
  initials: 'CAB',
  avatar: './assets/avatar.png',
  about: 'Hello world! I\'m Clelia, a DevRel engineer working for Qdrant! I\'m passionate about AI, search infra and scaling, devtools and all things open source. I spend most of my time writing code in rust, python, typescript or go, and I mostly live on git repositories, but I also enjoy walks, traveling and art!',
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
    {
      title: 'Mastodon',
      url: 'https://mastodon.social/@itsclelia',
      icon: MastodonIcon
    },
  ],
}
