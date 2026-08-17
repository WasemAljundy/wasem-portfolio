export type IconName = "email" | "external" | "github" | "linkedin" | "whatsapp";

const paths: Record<IconName, React.ReactNode> = {
  email: <path d="M3 5.5h18v13H3zM4 7l8 6 8-6" />,
  external: (
    <path d="M14 4h6v6M20 4l-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
  ),
  github: (
    <path d="M12 2.7a9.4 9.4 0 0 0-3 18.3c.5.1.6-.2.6-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.7 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.7.7 1 1.5 1 2.5 0 3.6-2.4 4.4-4.6 4.7.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.7Z" />
  ),
  linkedin: (
    <>
      <path d="M5 8v11M5 5v.01M10 19v-6.3c0-2.1 3-3.1 4.4-1.3.4.5.6 1.2.6 2V19M10 11v8M15 11h.01" />
      <circle cx="5" cy="5" r="1" />
    </>
  ),
  whatsapp: (
    <path d="M20 11.8a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4.1A8 8 0 1 1 20 11.8Zm-11.7-3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.8 1.3 1.9 2.3 3.3 3 .2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.5.3.5.5-.1.8-.4 1.5-1 2-.5.5-1.3.7-2.1.5-1.1-.2-2.4-.7-4.3-2.4-1.5-1.3-2.5-3-2.8-4-.3-.9.1-2.2.9-2.8Z" />
  ),
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  );
}
