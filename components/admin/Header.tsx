import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  return (
    <main className="admin-header">
      <div>
        <h2 className="text-dark-400 font-semibold text-2xl">
          {session?.user?.name}
        </h2>
        <p className="text-slate-500 text-base">
          Monitor all of your users and books here
        </p>
      </div>

      {/* <p>Search</p> */}
    </main>
  );
};

export default Header;
