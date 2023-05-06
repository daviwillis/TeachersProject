import { Button } from '@mui/material';
import { Teacher } from '../../@types/teacher';
import { Formatter } from '../../services/Formatter';
import { Description, EmptyList, Infos, ListItem, ListStyled, Name, Photo, Price } from './List.style';

interface ListProps {
  teachers: Teacher[];
  onSelect: (teacher: Teacher) => void;
}

const List = (props: ListProps) => {
  return (
    <div>
      {props.teachers.length > 0 ? (
        <ListStyled>
          {props.teachers.map((teacher) => (
            <ListItem key={teacher.id}>
              <Photo src={teacher.photo}></Photo>
              <Infos>
                <Name>{teacher.name}</Name>
                <Price>{Formatter.valueMonetary(teacher.hour_price)} por hora</Price>
                <Description>{Formatter.textLimitter(teacher.description, 200)}</Description>
                <Button onClick={() => props.onSelect(teacher)} sx={{ width: '70%' }}>
                  Marcar aula com {teacher.name}
                </Button>
              </Infos>
            </ListItem>
          ))}
        </ListStyled>
      ) : (
        <EmptyList>Nenhum professor encontrado</EmptyList>
      )}
    </div>
  );
};

export default List;
