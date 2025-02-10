import Link from "next/link";
import Image from "next/image";

// Import images for Next.js optimization
import prayImage from "@/public/images/pray-continually.webp";
import prayerHands from "@/public/images/prayer-hands.webp";
import mustardSeed from "@/public/images/mustard-seed.webp";
import incenseRising from "@/public/images/incense-rising.webp";
import lightDarkness from "@/public/images/light-in-darkness.webp";

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
            How Often is &quot;Prayer&quot; Mentioned in the Bible?
          </h2>

          {/* Optimized Image */}
          <Image 
            src={prayImage}
            alt="Pray Continually - 1 Thessalonians 5:17" 
            width={700} 
            height={400} 
            priority // Preloads this image for fast display
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-lg text-gray-300 leading-loose">
            In the King James Version (KJV):<br />
            - &quot;Prayer&quot; and its variations appear 547 times.<br />
            - &quot;Faith&quot; appears 336 times.<br />
            - &quot;Love&quot; appears 310 times.<br />
            - &quot;Grace&quot; appears 170 times.
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
            src={prayerHands}
            alt="Hands Lifted in Prayer" 
            width={700} 
            height={400} 
            loading="lazy" // Loads only when needed
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
            src={mustardSeed}
            alt="Mustard Seed of Faith" 
            width={700} 
            height={400} 
            loading="lazy"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            - Faith, even when small, has incredible power.
          </p>
        </div>
      </section>

      {/* Section 5: Deeper Symbolic Connections */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            Deeper Symbolism of Prayer
          </h2>

          <Image 
            src={incenseRising}
            alt="Incense Symbolizing Prayer" 
            width={700} 
            height={400} 
            loading="lazy"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            <strong>Prayer as Incense</strong> (Psalm 141:2, Revelation 5:8)<br />
            - Our prayers rise to God as a fragrant offering.<br />
            - Are we filling heaven with pleasing prayers?
          </p>
        </div>
      </section>

      {/* Section 6: Light and Darkness in Prayer */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            The Power of Prayer in Darkness
          </h2>

          <Image 
            src={lightDarkness}
            alt="Light Shining in Darkness" 
            width={700} 
            height={400} 
            loading="lazy"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            - Prayer brings spiritual light into our lives, pushing back the darkness.
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