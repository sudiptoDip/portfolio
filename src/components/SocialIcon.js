import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const map = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  facebook: FaFacebookF,
};

export default function SocialIcon({ name, ...props }) {
  const Icon = map[name] || FaGithub;
  return <Icon {...props} />;
}
