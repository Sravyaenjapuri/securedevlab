import React from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 'sql_injection',
    title: 'SQL Injection',
    description: 'Practice SQL Injection vulnerabilities and learn how attackers exploit databases.',
    image: 'https://www.kiteworks.com/wp-content/uploads/2023/05/The-Anatomy-of-an-SQL-Injection-Attack-and-How-to-Avoid-One.jpg',
  },
  {
    id: 'cross_site_scripting',
    title: 'Cross-Site Scripting (XSS)',
    description: 'Explore how malicious scripts can run in the browser through XSS vulnerabilities.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*yBl5TCfq5uIEby6y',
  }
];

const SecurityLabDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="display-5 mb-4 text-center">Security Practice Labs</h1>
      <div className="row g-4">
        {CATEGORIES.map((cat) => (
          <div className="col-md-6" key={cat.id}>
            <div className="card h-100 shadow-sm" style={{ cursor: 'pointer' }} onClick={() => navigate(`/${cat.id}`)}>
              <img src={cat.image} className="card-img-top" alt={cat.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="card-title">{cat.title}</h4>
                <p className="card-text">{cat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityLabDashboard;
