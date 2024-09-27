import React from 'react';

export const HomeInfo = () => {
  return (
    <>
      <div className="bg-circuit-pattern flex sm:flex-row-reverse justify-between items-center">
        <div className="container mx-auto px-2 py-4">
          <div className="flex justify-center">
            <a href="/projectos">
              <button className="bg-green-400 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded">
                Projetos
              </button>
            </a>
            <a href="/curriculo">
              <button className="ml-4 bg-green-400 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded">
                Currículo
              </button>
            </a>
          </div>
          <div className="text-gray-600 justify-center text-justify w-full">
            <p>
              Write a few sentences here to introduce yourself.
            </p>
            <p>
              I am a frontend developer with 3 years of experience.
            </p>
            <p>
              I have a strong background in web development and user experience design.
            </p>
            <p>
              Currently working as a Frontend Developer at Bytes4future.
            </p>
          </div>

          <div className="mt-8 text-gray-600">
            <h2 className="text-2xl font-bold">Contato</h2>
            <ul className="mt-4">
              <li>Email: vicentesambo3@gmail.com</li>
              <li>WhatsApp: (+258) 85 5092 198</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
