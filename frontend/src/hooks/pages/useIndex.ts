import { ApiService } from './../../services/ApiService';
import { useEffect, useState } from 'react';
import { Teacher } from '../../@types/teacher';
export function useIndex() {
  const [listTeachers, setListTeachers] = useState<Teacher[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    ApiService.get('/teachers').then((response) => {
      setListTeachers(response.data);
    });
  }, []);

  useEffect(() => {
    cleanForm();
  }, [selectedTeacher]);

  function bookClass() {
    if (selectedTeacher !== null) {
      if (validateClassData()) {
        ApiService.post(`/teachers/${selectedTeacher.id}/classes`, {
          name,
          email,
        })
          .then(() => {
            setSelectedTeacher(null);
            setMessage('Cadastrado com sucesso');
          })
          .catch((error) => {
            setMessage(error.response?.data.message);
          });
      } else {
        setMessage('Preencha os dados corretamente');
      }
    }
  }

  function validateClassData() {
    return name.length > 0 && email.length > 0;
  }

  function cleanForm() {
    setName('');
    setEmail('');
  }

  return {
    listTeachers,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    bookClass,
    message,
    setMessage,
  };
}
