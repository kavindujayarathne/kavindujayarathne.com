export type ProjectLink = {
  text: string;
  url: string;
};

export type ProjectStatus = 'active' | 'archived' | 'wip';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  date: string;
  status: ProjectStatus;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: 'macpak',
    description: `macpak is an interactive wrapper around Homebrew for macOS.
It lets you browse, install, and uninstall Homebrew packages through a fuzzy-finder interface
with live previews, so you spend less time typing commands and more time getting things done.
It also includes a zapper that can completely remove applications installed outside of Homebrew,
along with their leftovers.`,
    tags: ['macpak', 'cli-tool'],
    date: '2025-08-15',
    status: 'active',
    links: [
      { text: 'macpak Main Repository', url: 'https://github.com/kavindujayarathne/macpak' },
      { text: 'macpak Documentation', url: '/blogs/macpak-documentation' },
      { text: 'macpak Homebrew Tap Repository', url: 'https://github.com/kavindujayarathne/homebrew-macpak' },
      { text: 'CHANGELOG.md', url: 'https://raw.githubusercontent.com/kavindujayarathne/macpak/refs/heads/main/CHANGELOG.md' },
      { text: 'Story Behind macpak', url: '/blogs/journey-of-my-first-cli-tool' },
    ],
  },
];
