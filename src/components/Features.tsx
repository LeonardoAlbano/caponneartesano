import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

export default function Features() {
  const features = [
    {
      name: 'PHOTOGRAPHY',
      description:
        'Lorem ipsum dolor sit amet. ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet. ',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'DEVELOPMENT',
      description:
        'Lorem ipsum dolor sit amet. ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.',
      icon: ArrowPathIcon,
    },
    {
      name: 'SECURITY',
      description:
        'Lorem ipsum dolor sit amet. ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.',
      icon: FingerPrintIcon,
    },
    {
      name: 'LOCKED',
      description:
        'Lorem ipsum dolor sit amet. ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.ipsum dolor sit amet.',
      icon: LockClosedIcon,
    },
  ]

  return (
    <div>
      <section className="pb-12 xl:py-24">
        <div className="container mx-auto">
          <h2 className="section-title mx-auto mb-2 text-center xl:mb-3">
            Key Features
          </h2>

          <div className="flex flex-col">
            <div className="mx-auto max-w-7xl text-center">
              <p className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl ">
                Everything you need to deliver faster.
              </p>
              <p className="mt-6 text-lg leading-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, qui. Voluptatum labore dolorem laborum, voluptate
                blanditiis corporis impedit inventore aperiam voluptas ullam
                deserunt consectetur qui soluta vitae, ea itaque commodi!
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative transition-all hover:scale-110"
                >
                  <dt className="justify-center text-base font-semibold leading-7 text-muted-foreground">
                    <div className="mb-4 flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-primary">
                      <feature.icon
                        className="h-[36px] w-[36px] text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </dt>
                  <dd>
                    <p className="">{feature.name}</p>
                    <p>{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
