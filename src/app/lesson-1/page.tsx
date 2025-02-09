import Link from "next/link";
import Image from "next/image";  
import RefiningAnimation from "@/components/RefiningAnimation";

export default function Lesson1() {
  return (
    <div className="snap-container">

      {/* Section 1: Jesus' Prayer for Peter & The Refining Fire */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-8 text-yellow-400">
            Lesson 1: Jesus&apos;s Prayer for Peter & The Refining Fire
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            <strong>Luke 22:31-32</strong> - &quot;Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat, but I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers.&quot;
            <br />
            Jesus foresaw Peter&apos;s test but <strong>prayed for his faith to endure.</strong>
          </p>

          {/* Sift Like Wheat Image */}
          <div className="flex justify-center my-6">
            <Image
              src="/images/sift-wheat.jpg"
              alt="Sifting wheat process"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          <p className="text-gray-300 leading-loose mt-4">
            The process of **sifting wheat** involves shaking and separating the grain from the chaff.  
            Similarly, **Satan desired to test Peter**—to shake him and see what remained.  
            But Jesus **prayed for his faith to endure.**
          </p>
        </div>
      </section>

      {/* Section 2: Jesus Predicts Peter’s Denial */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Jesus Predicts Peter&apos;s Denial</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Luke 22:33-34</strong> - Peter said, “Lord, I am ready to go with you both to prison and to death.”  
            Jesus replied, “I tell you, Peter, the rooster will not crow this day until you deny three times that you know me.”
          </p>
        </div>
      </section>

      {/* Section 3: Peter Denies Jesus */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Peter Denies Jesus</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Luke 22:54-62</strong> - Peter was accused three times of knowing Jesus.  
            Each time, he denied it: <strong>“I do not know Him!”</strong>  
            Immediately, the rooster crowed, and <strong>Jesus turned and looked at Peter.</strong>  
            <br /><br />
            Peter remembered the words of Jesus and <strong>wept bitterly.</strong>  
            He had been <strong>sifted like wheat.</strong>
          </p>
        </div>
      </section>

      {/* Section 4: Jesus Restores Peter */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Peter&apos;s Restoration</h2>
          <p className="text-gray-300 leading-loose">
            <strong>John 21:15-17</strong> - After Jesus&apos; resurrection, He asked Peter three times, <strong>“Do you love me?”</strong>  
            <br />
            Each time Peter said <strong>“Yes, Lord”</strong>, Jesus said:  
            <strong>“Feed my lambs.” “Tend my sheep.” “Feed my sheep.”</strong>  
            <br /><br />
            The <strong>three denials</strong> were now <strong>three affirmations.</strong>  
            Peter was being <strong>refined and restored.</strong>
          </p>
        </div>
      </section>

      {/* Section 5: Peter Boldly Declares Jesus */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Peter Proclaims Jesus Boldly</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Acts 2:14-41</strong> - <strong>Pentecost</strong>  
            Peter, once afraid, <strong>now stood before thousands and preached boldly:</strong>  
            <br /><br />
            <strong>“Repent and be baptized, every one of you, in the name of Jesus Christ!”</strong>  
            <br />
            <strong>3,000 people</strong> were saved that day.  
            The <strong>fearful Peter</strong> had now been <strong>refined into a bold preacher.</strong>
          </p>
        </div>
      </section>

      {/* Section 6: Gold Refining & Spiritual Growth */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Gold Refining & Spiritual Growth</h2>
        <p className="text-gray-300 leading-loose">
          Just like <strong>gold in the fire</strong>, Peter’s faith was tested.  
          The <strong>impurities</strong> burned away, leaving him <strong>bold, refined, and unshakable.</strong>
        </p>
        <video className="rounded-lg shadow-lg w-full max-w-2xl" controls muted playsInline preload="auto" poster="/images/gold-preview.jpg">
          <source src="/videos/gold-refining.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <RefiningAnimation />
      </section>

      {/* Section 7: Refining Fire in Scripture */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Refining Fire in Scripture</h2>
        <p className="text-gray-300 leading-loose">
          <strong>1 Peter 1:6-7</strong> - In this you greatly rejoice, though now for a little while, if need be, you have been [c]grieved by various trials, that the genuineness of your faith, being much more precious than gold that perishes, though it is tested by fire, may be found to praise, honor, and glory at the revelation of Jesus Christ, whom having not [d]seen you love. Though now you do not see Him, yet believing, you rejoice with joy inexpressible and full of glory, 9 receiving the end of your faith—the salvation of your souls.
        </p>
        <p className="text-gray-300 leading-loose mt-4">
          <strong>Job 23:10</strong> - But He knows the way that I take;
When He has tested me, I shall come forth as gold.
        </p>
      </section>

      {/* Section 8: Reflection Questions */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Reflection Questions</h2>
        <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
          <li>How has prayer sustained you in times of testing?</li>
          <li>How does Jesus’ prayer for Peter compare to how He intercedes for us?</li>
          <li>How can we be more intentional about praying for others going through trials?</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-400 hover:underline text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}