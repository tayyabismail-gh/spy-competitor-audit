import { Download, TrendingUp } from 'lucide-react';
import { auditData } from '../../data/auditData';
import { downloadAsJSON } from '../../utils/helpers';
import './Section.css';

interface ViralPatternsSectionProps {
  searchQuery: string;
}

export default function ViralPatternsSection({ searchQuery }: ViralPatternsSectionProps) {
  const patterns = auditData.viralPatterns;
  const matchesSearch = !searchQuery || JSON.stringify(patterns).toLowerCase().includes(searchQuery.toLowerCase());

  const handleDownloadJSON = () => {
    downloadAsJSON(patterns, 'viral-patterns.json');
  };

  if (!matchesSearch) {
    return (
      <section className="section">
        <div className="empty-state">
          <p>No viral patterns found matching your search.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Viral Pattern Detection</h2>
          <p className="section-subtitle">Repeating elements that drive engagement and shares</p>
        </div>
        <div className="section-actions">
          <button className="btn-tertiary" onClick={handleDownloadJSON} title="Download as JSON">
            <Download size={18} />
            JSON
          </button>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card pattern-card">
          <div className="pattern-header">
            <TrendingUp size={20} className="pattern-icon" />
            <h3>Topics That Perform</h3>
          </div>
          <ul className="pattern-list">
            {patterns.topics.map((topic, idx) => (
              <li key={idx}>
                <span className="pattern-bullet">→</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="card pattern-card">
          <div className="pattern-header">
            <TrendingUp size={20} className="pattern-icon" />
            <h3>Hook Structures</h3>
          </div>
          <ul className="pattern-list">
            {patterns.hooks.map((hook, idx) => (
              <li key={idx}>
                <span className="pattern-bullet">→</span>
                {hook}
              </li>
            ))}
          </ul>
        </div>

        <div className="card pattern-card">
          <div className="pattern-header">
            <TrendingUp size={20} className="pattern-icon" />
            <h3>Emotional Triggers</h3>
          </div>
          <ul className="pattern-list">
            {patterns.emotionalTriggers.map((trigger, idx) => (
              <li key={idx}>
                <span className="pattern-bullet">→</span>
                {trigger}
              </li>
            ))}
          </ul>
        </div>

        <div className="card pattern-card">
          <div className="pattern-header">
            <TrendingUp size={20} className="pattern-icon" />
            <h3>Viral Phrases</h3>
          </div>
          <ul className="pattern-list">
            {patterns.phrases.map((phrase, idx) => (
              <li key={idx}>
                <span className="pattern-bullet">→</span>
                "{phrase}"
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
