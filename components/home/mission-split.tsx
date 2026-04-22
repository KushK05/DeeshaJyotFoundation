import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/icon";

export function MissionSplit() {
  return (
    <section className="mx-auto mb-32 grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-8 lg:grid-cols-2">
      <div className="space-y-6">
        <h2 className="font-headline text-4xl leading-tight text-primary md:text-5xl">
          Crafting futures through compassion and skill.
        </h2>
        <p className="text-lg leading-relaxed text-on-surface-variant">
          We believe that community empowerment starts at the kitchen table and
          the classroom desk. Our programs are designed not just for relief, but
          to build sustainable livelihoods for generations.
        </p>
        <p className="text-lg leading-relaxed text-on-surface-variant">
          Every child deserves nourishment and learning. Every woman deserves
          the tools to craft her own destiny with dignity.
        </p>
        <Link
          href="/about"
          className="focus-ring inline-flex items-center gap-2 font-bold text-tertiary underline decoration-dotted underline-offset-4"
        >
          Read Our Story
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative h-[500px]">
        <div className="absolute left-0 top-0 z-10 h-80 w-64 rotate-[-6deg] bg-surface-container-lowest p-3 shadow-warm transition-transform duration-500 hover:rotate-0">
          <Image
            src="/assets/images/mission-student.jpeg"
            alt="Student writing in a notebook"
            width={256}
            height={224}
            className="mb-2 h-56 w-full object-cover"
          />
          <p className="text-center font-headline text-sm italic text-on-surface-variant">
            Hope in every word.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 z-20 h-80 w-72 rotate-[4deg] bg-surface-container-lowest p-3 shadow-warm transition-transform duration-500 hover:rotate-0">
          <Image
            src="/assets/images/mission-weaving.jpeg"
            alt="Hands weaving on a loom"
            width={288}
            height={224}
            className="mb-2 h-56 w-full object-cover"
          />
          <p className="text-center font-headline text-sm italic text-on-surface-variant">
            Skills that empower.
          </p>
        </div>
        <div className="absolute left-1/2 top-1/2 z-30 h-80 w-64 -translate-x-1/2 -translate-y-1/2 rotate-[2deg] bg-surface-container-lowest p-3 shadow-warm transition-transform duration-500 hover:rotate-0">
          <Image
            src="/assets/images/mission-pottery.jpeg"
            alt="Woman artisan displaying pottery"
            width={256}
            height={224}
            className="mb-2 h-56 w-full object-cover"
          />
          <p className="text-center font-headline text-sm italic text-on-surface-variant">
            Leading by example.
          </p>
        </div>
      </div>
    </section>
  );
}
