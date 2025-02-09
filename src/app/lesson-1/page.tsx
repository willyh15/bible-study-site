import Link from "next/link";
import RefiningAnimation from "@/components/RefiningAnimation";

export default function Lesson1() {
  return (
    <div className="snap-container">
      {/* Section 1: Lesson Introduction */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-8 text-yellow-400">
            Lesson 1: Jesus&apos;s Prayer for Peter &amp; The Refining Fire
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            <strong>Luke 22:31-32</strong> - &quot;Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat, but I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers.&quot;
            <br />
            This illustrates the power of intercessory prayer and faith refinement.
          </p>
        </div>
      </section>

      {/* Section 2: Deep Dive into Jesus' Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">The Power of Prayer &amp; Spiritual Refinement</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Jesus Knew Satan’s Plans</strong>
            <br /><strong>Luke 22:31-32</strong> - &quot;Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat.&quot;
            <br /> Satan wanted to shake Peter’s faith, just as he does with us. God remains in control, even in spiritual battles.
          </p>

          {/* Sift Like Wheat Image */}
          <div className="flex justify-center my-6">
            <img
              src="/images/sift-wheat.jpg"
              alt="Sifting wheat process"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>

          <p className="text-gray-300 leading-loose mt-4">
            The process of sifting wheat involves shaking and separating the grain from the chaff. Similarly, Satan desired to test Peter—to shake him and see what remained. But Jesus prayed for his faith to endure.
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            <strong>Parallel: Satan’s Request to Test Job</strong>
            <br /><strong>Job 1:6-12</strong> - &quot;Now there was a day when the sons of God came to present themselves before the Lord, and Satan also came among them.&quot;
            <br /> Just as Satan sought permission to test Job, he sought to test Peter. God allowed these trials, not to destroy them, but to refine them.
          </p>
        </div>
      </section>

      {/* Section 3: Jesus Prays for Us */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Jesus Prayed for Us</h2>
        <p className="text-gray-300 leading-loose max-w-3xl text-center">
          <strong>John 17:9, 20-21</strong> - &quot;I am praying for them. I am not praying for the world but for those whom you have given me, for they are yours... I do not ask for these only, but also for those who will believe in me through their word, that they may all be one, just as you, Father, are in me, and I in you, that they also may be in us, so that the world may believe that you have sent me.&quot;
          <br />
          <br />
          Jesus' prayer was not just for His disciples but for **us today**—for all who would believe in Him. He intercedes for us just as He did for Peter. His love and protection extend to every believer.
        </p>
      </section>

      {/* Section 4: Video & Refining Fire */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Gold Refining &amp; Spiritual Growth</h2>
        
        {/* Video with Preview Image */}
        <video
          className="rounded-lg shadow-lg w-full max-w-2xl"
          controls
          muted
          playsInline
          preload="auto"
          poster="/images/gold-preview.jpg"
        >
          <source src="/videos/gold-refining.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Refining Animation */}
        <RefiningAnimation />
      </section>

      {/* Section 5: Biblical Support for Refinement */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Refining Fire: A Biblical Perspective</h2>
          <p className="text-gray-300 leading-loose">
            <strong>1 Peter 1:6-7</strong> - &quot;In this you rejoice, though now for a little while, if necessary, you have been grieved by various trials, so that the tested genuineness of your faith—more precious than gold that perishes though it is tested by fire—may be found to result in praise and glory and honor at the revelation of Jesus Christ.&quot;
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Job 23:10</strong> - &quot;But he knows the way that I take; when he has tried me, I shall come out as gold.&quot;
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Malachi 3:3</strong> - &quot;He will sit as a refiner and purifier of silver, and he will purify the sons of Levi and refine them like gold and silver, and they will bring offerings in righteousness to the Lord.&quot;
          </p>
        </div>
      </section>

      {/* Section 6: Reflection Questions */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Reflection Questions</h2>
          <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
            <li>How does Jesus&apos;s intercession shape our understanding of prayer?</li>
            <li>What impurities has God revealed in your faith through prayer?</li>
            <li>How can we make intercessory prayer a habit in our daily lives?</li>
            <li>Have you experienced a time where trials refined and strengthened your faith?</li>
            <li>How does the process of gold refinement reflect our spiritual journey?</li>
          </ul>
        </div>
      </section>

      {/* Navigation Links */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-400 hover:underline text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
