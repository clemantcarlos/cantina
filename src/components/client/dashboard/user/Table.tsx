import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  cedula: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  hashedRt: string | null;
}

export default function Table() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/user")
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);

  return (
    <table className="w-full text-sm font-text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Correo electrónico
          </th>
          <th scope="col" className="px-6 py-3">
            Teléfono
          </th>
          <th scope="col" className="px-6 py-3">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((user) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={user.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.name}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phoneNumber}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Editar
                </a>
              </td>
            </tr>
          ))}
          {!data || data.length === 0 && (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center">
                Usuarios no encontrados
              </td>
            </tr>
          )}
      </tbody>
    </table>
  );
}
