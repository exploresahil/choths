/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Link from "next/link";

type NavLinksProps = {
  title: string;
  pageLink: string;
  classTitle: string;
};

export default ({ title, pageLink, classTitle }: NavLinksProps) => {
  return (
    <li>
      <Link href={pageLink} className={classTitle}>
        {title}
      </Link>
    </li>
  );
};
