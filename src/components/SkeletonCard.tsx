import { cn } from '@/lib/utils';

function SkeletonBox({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded bg-muted', className)} />;
}

export function ProgramCardSkeleton() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <div className="flex items-start gap-3">
        <SkeletonBox className="h-12 w-12 rounded-xl shrink-0" />
        <div className="space-y-2 flex-1 pt-0.5">
          <SkeletonBox className="h-4 w-20" />
          <SkeletonBox className="h-3 w-16" />
        </div>
      </div>
      <SkeletonBox className="h-5 w-3/4" />
      <div className="space-y-1.5">
        <SkeletonBox className="h-3 w-full" />
        <SkeletonBox className="h-3 w-5/6" />
        <SkeletonBox className="h-3 w-4/6" />
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-border/60">
        <SkeletonBox className="h-3 w-24" />
        <SkeletonBox className="h-8 w-24 rounded-md" />
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <SkeletonBox className="h-10 w-full" />
      <div className="p-6 space-y-3">
        <div className="flex gap-2">
          <SkeletonBox className="h-5 w-20 rounded-full" />
          <SkeletonBox className="h-5 w-16 rounded-full" />
        </div>
        <SkeletonBox className="h-5 w-full" />
        <SkeletonBox className="h-5 w-4/5" />
        <div className="space-y-1.5">
          <SkeletonBox className="h-3 w-full" />
          <SkeletonBox className="h-3 w-5/6" />
        </div>
        <div className="flex gap-2 pt-2">
          <SkeletonBox className="h-3 w-20" />
          <SkeletonBox className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}
