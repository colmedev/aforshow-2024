import Image from "next/image";

export const Sponsors = () => {
  return (
    <section className="w-full justify-center pb-[72px] mx-auto max-w-6xl flex flex-col gap-6">
      <p className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-caPrimary-500 to-caSecondary-500">
        Evento sponsorizado gracias a
      </p>
      <div
        className="flex flex-col sm:flex-row justify-around items-center gap-12 [mask-image:linear-gradient(to_left,_transparent_0%,_black_20%,_black_80%,_transparent_95%)] [&>*]:animate-logo-cloud">
        <Image
          src="/imgs/afordin-sponsor.png"
          alt="afordin-logo-sponsor"
          width="200"
          height="200"
        />
        <Image
          src="/imgs/afordin-sponsor.png"
          alt="afordin-logo-sponsor"
          width="200"
          height="200"
        />
        <Image
          src="/imgs/afordin-sponsor.png"
          alt="afordin-logo-sponsor"
          width="200"
          height="200"
        />
        <Image
          src="/imgs/afordin-sponsor.png"
          alt="afordin-logo-sponsor"
          width="200"
          height="200"
        />
        <Image
          src="/imgs/afordin-sponsor.png"
          alt="afordin-logo-sponsor"
          width="200"
          height="200"
        />
      </div>
    </section>
  );
};
