import { StatsCard, StatsList, ListItem, Stats, Header } from './Statistics.styled';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}47`;
  }

export const Statistics = ({ stats, title }) => {
  return (
    <StatsCard>
      {title && (<Header>{title}</Header>)}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} color={getRandomHexColor()}>
              <Stats $fs="12px">{label}</Stats>
              <Stats $fs="14px">{percentage}</Stats>
            </ListItem>
          );
        })}
      </StatsList>
    </StatsCard>
  );
};
