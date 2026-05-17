import { Download, Zap } from 'lucide-react';
import { auditData } from '../../data/auditData';
import { searchData, downloadAsJSON, downloadAsCSV } from '../../utils/helpers';
import './Section.css';

interface OpportunitiesSectionProps {
  searchQuery: string;
}

export default function OpportunitiesSection({ searchQuery }: OpportunitiesSectionProps) {
  const filteredOpportunities = searchData(searchQuery, auditData.opportunities);

  const handleDownloadJSON = () => {
    downloadAsJSON(filteredOpportunities, 'opportunities.json');
  };

  const handleDownloadCSV = () => {
    downloadAsCSV(filteredOpportunities, 'opportunities.csv');
  };

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2>Market Gaps & Opportunities</h2>
          <p className="section-subtitle">8 underserved areas where you can differentiate</p>
        </div>
        <div className="section-actions">
          <button className="btn-tertiary" onClick={handleDownloadJSON} title="Download as JSON">
            <Download size={18} />
            JSON
          </button>
          <button className="btn-tertiary" onClick={handleDownloadCSV} title="Download as CSV">
            <Download size={18} />
            CSV
          </button>
        </div>
      </div>

      {filteredOpportunities.length === 0 ? (
        <div className="empty-state">
          <p>No opportunities found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-2">
          {filteredOpportunities.map((opp, idx) => (
            <div key={idx} className="card opportunity-card">
              <div className="opportunity-header">
                <Zap size={20} className="opportunity-icon" />
                <h3>{opp.title}</h3>
              </div>

              <div className="opportunity-content">
                <div className="opportunity-section">
                  <span className="section-label">Opportunity</span>
                  <p>{opp.description}</p>
                </div>

                <div className="opportunity-section">
                  <span className="section-label">Why</span>
                  <p>{opp.why}</p>
                </div>

                <div className="opportunity-section">
                  <span className="section-label">Your Angle</span>
                  <p className="angle-text">"{opp.angle}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="section-stats">
        <p>Showing {filteredOpportunities.length} of {auditData.opportunities.length} opportunities</p>
      </div>
    </section>
  );
}
