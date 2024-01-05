export default function Modal() {
  return (
    <div className="xl:text-base sm:text-sm text-xs fixed bg-slate-600/[.2] w-full h-full z-40 grid place-items-center px-2 text-slate-600 dark:text-slate-200">
      <section className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900">
        <button
          aria-label="close alert"
          className="absolute right-3 sm:right-4"
        ></button>
        <h2 className="font-medium mb-5 text-lg md:text-2xl">{"title"}</h2>
      </section>
    </div>
  );
}
