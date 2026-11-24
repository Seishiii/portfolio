import Link from "next/link";
import CurrentYear from "@/components/layout/CurrentYear";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          © <CurrentYear /> Kent Clark Ogawa. All rights reserved.
        </p>

        <Link href="/contact">Get in touch</Link>
      </div>
    </footer>
  );
}
