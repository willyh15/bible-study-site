import Image from "next/image";
import Link from "next/link";
import refiningGif from "@/public/gold-refining.gif"; // Place this in /public folder
import RefiningAnimation from "@/components/RefiningAnimation";

export default function Lesson1() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Lesson 1: Jesus' Prayer for Peter & The Refining Fire</h1>

      <p className="text-lg">
        In <strong>Luke 22:31-32</strong>, Jesus prays for Peter, knowing he will be tested. 
        This illustrates the power of intercessory prayer and faith refinement.
      </p>

      {/* Refining Gold GIF */}
      <div className="flex justify-center my-6">
        <Image src={refiningGif} alt="Gold Refining Process" width={500} height={300} />
      </div>

      <RefiningAnimation />

      {/* Embedded YouTube Video */}
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with real video ID
          title="Gold Refining Process"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Discussion Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Reflection Questions</h2>
        <ul className="list-disc pl-6">
          <li>How does Jesus’ intercession shape our understanding of prayer?</li>
          <li>What impurities has God revealed in your faith through prayer?</li>
          <li>How can we make intercessory prayer a habit in our daily lives?</li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="mt-6 text-center">
        <Link href="/">
          <a className="text-blue-500 hover:underline">← Back to Home</a>
        </Link>
      </div>
    </div>
  );
}
