import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { UpcomingPayments } from '@/components/dashboard/UpcomingPayments';
import { PropertyOverview } from '@/components/dashboard/PropertyOverview';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
  <p className="text-gray-500">Welcome back! Here&apos;s what&apos;s happening today.</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PropertyOverview />
        <UpcomingPayments />
      </div>

      <RecentTransactions />
    </div>
  );
}