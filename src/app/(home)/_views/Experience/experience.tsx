import { ExperienceCard } from '../../_components/ExperienceCard/experienceCard';
import { Title } from '../../_components/Title/title';

const Experience = () => {
  return (
    <div>
      <Title rotate title="Professional experience" />

      <div>
        <ExperienceCard company="HarBest Market" jobTitle="Frontend Developer" url="" />

        <ExperienceCard company="OpenBootcamp" jobTitle="Lead Frontend Developer" url="" />

        <ExperienceCard company="Imagina Formación" jobTitle="Frontend Developer" url="" />

        <ExperienceCard company="Imagina Formación" jobTitle="Assistant and online tutor" url="" />
      </div>
    </div>
  );
};

export { Experience };
