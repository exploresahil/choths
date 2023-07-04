/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
type NavLinksProps = {
  title: string;
  pageLink: string;
  classTitle: string;
  onClick: any;
};

export default ({ title, pageLink, classTitle, onClick }: NavLinksProps) => {
  return (
    <li>
      <a href={pageLink} className={classTitle} onClick={onClick}>
        {title}
      </a>
    </li>
  );
};
