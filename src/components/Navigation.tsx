import { Link2, MessageCircle, Lightbulb, Target, Zap, TrendingUp } from 'lucide-react';
import './Navigation.css';

type Section = 'hooks' | 'ctas' | 'ideas' | 'positioning' | 'opportunities' | 'patterns';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const navItems = [
  { id: 'hooks' as Section, label: 'Hooks', icon: Link2 },
  { id: 'ctas' as Section, label: 'CTAs', icon: MessageCircle },
  { id: 'ideas' as Section, label: 'Content Ideas', icon: Lightbulb },
  { id: 'positioning' as Section, label: 'Positioning', icon: Target },
  { id: 'opportunities' as Section, label: 'Opportunities', icon: Zap },
  { id: 'patterns' as Section, label: 'Viral Patterns', icon: TrendingUp },
];

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
