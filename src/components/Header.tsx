import { Search } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>SPY 👽</h1>
          <p>Competitor Audit Intelligence</p>
        </div>

        <div className="search-box">
          <Search size={20} />
          <input
            type="search"
            placeholder="Search hooks, CTAs, ideas, opportunities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
