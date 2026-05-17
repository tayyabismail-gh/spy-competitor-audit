import { Download } from 'lucide-react';
import { auditData } from '../../data/auditData';
import { downloadAsJSON } from '../../utils/helpers';
import './Section.css';

interface PositioningSectionProps {
  searchQuery: string;
}

export default function PositioningSection({ searchQuery }: PositioningSectionProps) {
  const positioning = auditData.positioning;
  const matchesSearch = !searchQuery || JSON.stringify(positioning).toLowerCase().includes(searchQuery.toLowerCase());

  const handleDownloadJSON = () => {
    downloadAsJSON(positioning, 'positioning.json');
  };

  if (!matchesSearch) {
    return (
      <section className="section">
        <div className="empty-state">
          <p>No positioning data found matching your search.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Brand Positioning & Strategy</h2>
          <p className="section-subtitle">Complete positioning analysis of Thedigitalkinggg</p>
        </div>
        <div className="section-actions">
          <button className="btn-tertiary" onClick={handleDownloadJSON} title="Download as JSON">
            <Download size={18} />
            JSON
          </button>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card positioning-card">
          <h3>Niche</h3>
          <p>{positioning.niche}</p>
        </div>

        <div className="card positioning-card">
          <h3>Target Audience</h3>
          <p>{positioning.targetAudience}</p>
        </div>

        <div className="card positioning-card">
          <h3>Primary Offer</h3>
          <p>{positioning.offer}</p>
        </div>

        <div className="card positioning-card">
          <h3>Expertise Level</h3>
          <p>{positioning.expertise}</p>
        </div>

        <div className="card positioning-card">
          <h3>Brand Personality</h3>
          <p>{positioning.personality}</p>
        </div>

        <div className="card positioning-card">
          <h3>Tone of Voice</h3>
          <p>{positioning.tone}</p>
        </div>

        <div className="card positioning-card">
          <h3>Monetization Model</h3>
          <p>{positioning.monetization}</p>
        </div>

        <div className="card positioning-card">
          <h3>Authority Strategy</h3>
          <p>{positioning.authority}</p>
        </div>
      </div>

      <div className="card positioning-card full-width">
        <h3>Content Promise</h3>
        <p className="promise-text">"{positioning.promise}"</p>
      </div>
    </section>
  );
}
