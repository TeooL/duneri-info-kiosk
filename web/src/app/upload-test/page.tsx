"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function UploadTestPage() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [url, setUrl] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const file = inputFileRef.current?.files?.[0];
        if (!file) return;

        const res = await fetch(`/api/upload?filename=${file.name}`, {
            method: "POST",
            body: file,
        });
        setUrl((await res.json()).url)
    }

    return (
        <div className="p-6">
            <h1>Upload test</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6">
                <input type="file" ref={inputFileRef} accept="image/*" required />
                <button type="submit">Upload</button>
            </form>
            {url && <Image src={url} alt="Uploaded image from user" width={500} height={500} />}
        </div>
    );
}
