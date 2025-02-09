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
            Jesus foresaw Peter's test but **prayed for his faith to endure.**
          </p>
        </div>
      </section>

      {/* Section 2: Jesus Predicts Peter’s Denial */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Jesus Predicts Peter's Denial</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Luke 22:33-34</strong> - Peter said, “Lord, I am ready to go with you both to prison and to death.”  
            Jesus replied, “I tell you, Peter, the rooster will not crow this day until you deny three times that you know me.”
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Matthew 26:33-35</strong> - Peter declared, “Even if all fall away on account of you, I never will.”  
            Jesus answered, “Truly I tell you, this very night, before the rooster crows, you will disown me three times.”
          </p>
        </div>
      </section>

      {/* Section 3: Peter Denies Jesus */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Peter Denies Jesus</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Luke 22:54-62</strong> - Peter was accused three times of knowing Jesus.  
            Each time, he denied it: **“I do not know Him!”**  
            Immediately, the rooster crowed, and **Jesus turned and looked at Peter.**  
            <br /><br />
            Peter remembered the words of Jesus and **wept bitterly.**  
            He had been **sifted like wheat.**
          </p>
        </div>
      </section>

      {/* Section 4: Jesus Restores Peter */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Peter's Restoration</h2>
          <p className="text-gray-300 leading-loose">
            <strong>John 21:15-17</strong> - After Jesus' resurrection, He asked Peter three times, **“Do you love me?”**  
            <br />
            Each time Peter said **“Yes, Lord”**, Jesus said:  
            **“Feed my lambs.” “Tend my sheep.” “Feed my sheep.”**  
            <br /><br />
            The **three denials** were now **three affirmations.**  
            Peter was being **refined and restored.**
          </p>
        </div>
      </section>

      {/* Section 5: Peter Boldly Declares Jesus */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Peter Proclaims Jesus Boldly</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Acts 2:14-41</strong> - **Pentecost**  
            Peter, once afraid, **now stood before thousands and preached boldly:**  
            <br /><br />
            **“Repent and be baptized, every one of you, in the name of Jesus Christ!”**  
            <br />
            **3,000 people** were saved that day.  
            The **fearful Peter** had now been **refined into a bold preacher.**
          </p>
        </div>
      </section>

      {/* Section 6: Gold Refining & Spiritual Growth */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Gold Refining & Spiritual Growth</h2>
        <p className="text-gray-300 leading-loose">
          Just like **gold in the fire**, Peter’s faith was tested.  
          The **impurities** burned away, leaving him **bold, refined, and unshakable.**
        </p>
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
        <RefiningAnimation />
      </section>

      {/* Section 7: Biblical Support for Refinement (Job, 1 Peter, Malachi) */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Refining Fire in Scripture</h2>
        <p className="text-gray-300 leading-loose">
          <strong>1 Peter 1:6-7</strong> - **Trials refine our faith like gold.**  
        </p>
        <p className="text-gray-300 leading-loose mt-4">
          <strong>Job 23:10</strong> - **“When He has tried me, I shall come out as gold.”**  
        </p>
        <p className="text-gray-300 leading-loose mt-4">
          <strong>Malachi 3:3</strong> - **“He will sit as a refiner and purifier of silver.”**  
        </p>
      </section>

      {/* Section 8: Reflection Questions */}
<section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
  <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Reflection Questions</h2>
  <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
    <li>How did Jesus' prayer for Peter impact his faith journey?</li>
    <li>What trials have tested your faith, and how has prayer helped sustain you?</li>
    <li>How can we pray for others who are struggling in their faith like Jesus did for Peter?</li>
    <li>Peter denied Jesus three times but was restored—how does prayer bring us back when we fail?</li>
    <li>How can we develop a stronger prayer life so that, like Peter, you grow in boldness and faith?</li>
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
