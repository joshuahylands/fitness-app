import { Link } from 'react-router';

export default function Header(props: { title?: string; }) {
  return (
    <header className="flex items-center gap-4">
      <Link to="/">
        <span className="material-symbols-outlined">{props.title && 'arrow_back_ios_new'}</span>
      </Link>
      <h3 className="flex-grow">{props.title}</h3>
      <span className="bg-white w-12 h-12 rounded-full"></span>
    </header>
  );
}
