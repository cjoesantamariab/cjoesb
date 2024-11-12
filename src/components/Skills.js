import React from 'react';

const skills = {
  Frontend: ["Angular", "React", "JavaScript", "PrimeNG"],
  Backend: ["Node.js", "ASP.NET", "Quarkus", "Python"],
  Cloud: ["AWS (Lambda, EC2, S3, Cognito, ApiGateway, ECS, ECR, DynamoDB, CloudFront, WAF, VPC, RDS, CloudFormation, SQS, SES y SNS)", "Terraform"],
  BasesDeDatos: ["SQL Server", "MongoDB", "MySQL", "PostgreSQL", "MariaDB", "DB2", "Oracle"],
};

function Skills() {
  return (
    <section className="skills">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-list">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skills[category].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
