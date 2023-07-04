/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Link from "next/link";

type NavLinksProps = {
  title: string;
  pageLink: string;
  classTitle: string;
  onClick: any;
};

export default ({ title, pageLink, classTitle, onClick }: NavLinksProps) => {
  return (
    <li>
      <Link href={pageLink} className={classTitle} onClick={onClick}>
        {title}
      </Link>
    </li>
  );
};
