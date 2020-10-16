import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

function FooterNavItem(props: Props) {
  return (
    <div className="px-5 py-2">
      <Link href={props.href}>
        <a className="text-base leading-6 text-gray-300 hover:text-gray-100">
          {props.title}
        </a>
      </Link>
    </div>
  );
}

export default FooterNavItem;
