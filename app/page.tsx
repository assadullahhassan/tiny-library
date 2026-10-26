import HeroImage from "@/public/images/hero-image.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="min-h-[580px] h-screen border border-stone-200 bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        
        <div className="max-w-[440px]">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-wide text-neutral-700">
            Browse Books
          </p>

          <h1 className="mb-4 text-3xl font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:text-4xl">
            Find your next favourite book
          </h1>

          <p className="mb-12 text-lg leading-[1.45] text-neutral-700">
            Tiny Library is a cosy corner of the web where
            readers discover hand-picked titles across
            every genre, from timeless classics to hidden
            indie gems.
          </p>

          <a
            href="#books"
            className="inline-flex items-center justify-center border-2 border-neutral-800 px-2 py-1.5 text-sm font-medium uppercase text-neutral-800 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Browse Books
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid aspect-square w-full max-w-[430px] grid-cols-7 gap-[18px] overflow-hidden">
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="col-span-7 row-span-7 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
         