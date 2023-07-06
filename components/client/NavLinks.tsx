import Link from "next/link";

type NavLinksProps = {
  title: string;
  pageLink: string;
  classTitle: string;
  onClick?: any;
};

export default function NavLinks({
  title,
  pageLink,
  classTitle,
  onClick,
}: NavLinksProps) {
  return (
    <li>
      <a href={pageLink} className={classTitle} onClick={onClick}>
        {title}
      </a>
    </li>
  );
}
