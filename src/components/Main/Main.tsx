import { FC } from 'react';

export interface MainProps {
  title?: 'Next Template';
}

export const Main: FC<MainProps> = ({ title = 'Next Template' }) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-zinc-50 px-8 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      <h1 className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
        {title}
      </h1>

      <ul className="flex flex-col gap-2 text-sm text-zinc-800 dark:text-zinc-100 md:space-y-2 md:text-base">
        <li>
          <span className="font-bold text-blue-500">🚀 Next.js:</span> Framework
          React para desenvolvimento de aplicações web.
        </li>
        <li>
          <span className="font-bold text-blue-500">⚙️ TypeScript:</span>{' '}
          Superset do JavaScript que adiciona tipagem estática ao código.
        </li>
        <li>
          <span className="font-bold text-blue-500">💄 Tailwind CSS:</span>{' '}
          Framework de CSS utilitário para estilização rápida e consistente.
        </li>
        <li>
          <span className="font-bold text-blue-500">📖 Storybook:</span>{' '}
          Ferramenta para desenvolvimento e documentação de componentes de
          interface.
        </li>
        <li>
          <span className="font-bold text-blue-500">🧪 Jest:</span> Framework de
          testes rápidos para projetos modernos de frontend.
        </li>
        <li>
          <span className="font-bold text-blue-500">🔧 Husky:</span> Ferramenta
          para adicionar ganchos de Git facilmente.
        </li>
        <li>
          <span className="font-bold text-blue-500">🛠️ Lint-Staged:</span>{' '}
          Executa linters em arquivos modificados no repositório.
        </li>
        <li>
          <span className="font-bold text-blue-500">📝 ESLint:</span> Ferramenta
          de linting para identificar e corrigir problemas no código JavaScript.
        </li>
        <li>
          <span className="font-bold text-blue-500">📑 Prettier:</span>{' '}
          Ferramenta de formatação de código.
        </li>
      </ul>
    </div>
  );
};
