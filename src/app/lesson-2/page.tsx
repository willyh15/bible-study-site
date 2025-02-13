/* eslint-disable react/no-unescaped-entities */


import Link from "next/link";
import Image from "next/image";

export default function Lesson2() {
  return (
    <div className="snap-container">
      {/* Section 1: The Frequency and Importance of Prayer */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-yellow-400">
            Lesson 2: The Power and Necessity of Prayer
          </h1>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            How Often is "Prayer" Mentioned in the Bible?
          </h2>

          <Image
            src="/images/pray-continually.webp"
            alt="Pray Continually - 1 Thessalonians 5:17"
            width={700}
            height={400}
            priority
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-lg text-gray-300 leading-loose">
            In the King James Version (KJV):<br />
            - "Prayer" and its variations appear 547 times.<br />
            - "Faith" appears 336 times.<br />
            - "Love" appears 310 times.<br />
            - "Grace" appears 170 times.
          </p>
        </div>
      </section>

      {/* Section 2: Scriptural Foundation for Prayer */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            Why is Prayer Necessary?
          </h2>

          <Image
            src="/images/prayer-hands.webp"
            alt="Hands Lifted in Prayer"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            - A lifestyle of continual communion with God.<br />
            - Is prayer just scheduled moments, or a constant connection?
          </p>
        </div>
      </section>

      {/* Section 3: The Growth of Faith */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            The Growth of Faith
          </h2>

          <Image
            src="/images/mustard-seed.webp"
            alt="Mustard Seed of Faith"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            - Faith, even when small, has incredible power.
          </p>
        </div>
      </section>

      {/* Section 4: Paul's Plea - Finding Strength in God's Will */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            Finding Strength in God's Will
          </h2>

          <Image
            src="/images/paul-thorn.webp"
            alt="Paul's Prayer and God's Answer"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            <strong>2 Corinthians 12:7-10</strong> - "My grace is sufficient for you, for my power is made perfect in weakness."<br />
            - Paul pleaded for relief, but God’s answer was **grace**, not removal of suffering.<br />
            - Sometimes, prayer doesn't remove hardship, but strengthens us **through it**.
          </p>
        </div>
      </section>

      {/* Section 5: The Persistent Widow - Keep Praying, Don't Lose Heart */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            The Power of Persistent Prayer
          </h2>

          <Image
            src="/images/persistent-widow.webp"
            alt="The Persistent Widow in Prayer"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            <strong>Luke 18:1-8</strong> - "They ought always to pray and not lose heart."<br />
            - Jesus taught this parable to show the **power of persistent prayer**.<br />
            - If an **unjust judge** answered the widow because of persistence, **how much more will our loving Father respond?**
          </p>
        </div>
      </section>

      {/* Section 6: Deeper Symbolic Connections */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            Deeper Symbolism of Prayer
          </h2>

          <Image
            src="/images/incense-rising.webp"
            alt="Incense Symbolizing Prayer"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            <strong>Prayer as Incense</strong> (Psalm 141:2, Revelation 5:8)<br />
            - Our prayers rise to God as a fragrant offering.<br />
            - Are we filling heaven with pleasing prayers?
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-400 hover:underline text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
