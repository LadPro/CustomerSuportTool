<!-- /**
 * v0 by Vercel.
 * @see https://v0.dev/t/zes8qwcEM03
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */ -->
<!-- import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardContent, Card } from "@/components/ui/card" -->
<template>
    <div>
        div class="flex flex-col min-h-screen">
      <div class="grid gap-4 p-4">
        <header class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <UsersIcon class="h-6 w-6" />
            <div class="text-2xl">Clients</div>
          </div>
          <div class="ml-auto flex items-center gap-4">
            <Button size="sm">Send emails</Button>
            <Button size="sm">Send messages</Button>
            <Button size="sm">Bulk client input</Button>
          </div>
        </header>
        <div class="grid gap-4">
          <div class="flex items-center gap-4">
            <div class="relative">
              <SearchIcon class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input class="pl-8" placeholder="Search clients..." type="search" />
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Button class="rounded-full" size="sm" variant="outline">
              <PlusIcon class="w-4 h-4" />
              New
            </Button>
            <Button class="rounded-full" size="sm" variant="outline">
              <FileEditIcon class="w-4 h-4" />
              Edit
            </Button>
            <Button class="rounded-full" size="sm" variant="outline">
              <TrashIcon class="w-4 h-4" />
              Delete
            </Button>
          </div>
          <Card>
            <CardContent class="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead class="w-8 leading-none">
                      <Checkbox id="ch1" />
                    </TableHead>
                    <TableHead class="font-normal">Name</TableHead>
                    <TableHead class="font-normal">Address</TableHead>
                    <TableHead class="font-normal">Contact number</TableHead>
                    <TableHead class="font-normal">Contact date</TableHead>
                    <TableHead class="font-normal">Contact history</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell class="w-8 leading-none">
                      <Checkbox id="ch2" />
                    </TableCell>
                    <TableCell class="font-medium">John Doe</TableCell>
                    <TableCell>1234 Elm St, Springfield, IL</TableCell>
                    <TableCell>555-1234</TableCell>
                    <TableCell>2023-10-02</TableCell>
                    <TableCell class="truncate">Sent email on 2023-10-01</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="w-8 leading-none">
                      <Checkbox id="ch3" />
                    </TableCell>
                    <TableCell class="font-medium">Alice Smith</TableCell>
                    <TableCell>5678 Oak Ave, Portland, OR</TableCell>
                    <TableCell>555-5678</TableCell>
                    <TableCell>2023-10-05</TableCell>
                    <TableCell class="truncate">Left voicemail on 2023-10-04</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="w-8 leading-none">
                      <Checkbox id="ch4" />
                    </TableCell>
                    <TableCell class="font-medium">Bob Johnson</TableCell>
                    <TableCell>9101 Pine Rd, Austin, TX</TableCell>
                    <TableCell>555-9101</TableCell>
                    <TableCell>2023-10-10</TableCell>
                    <TableCell class="truncate">Spoke in person on 2023-10-09</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="w-8 leading-none">
                      <Checkbox id="ch5" />
                    </TableCell>
                    <TableCell class="font-medium">Eva Williams</TableCell>
                    <TableCell>2345 Cedar Ln, Miami, FL</TableCell>
                    <TableCell>555-2345</TableCell>
                    <TableCell>2023-10-15</TableCell>
                    <TableCell class="truncate">Sent text message on 2023-10-14</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="w-8 leading-none">
                      <Checkbox id="ch6" />
                    </TableCell>
                    <TableCell class="font-medium">Mike Brown</TableCell>
                    <TableCell>6789 Birch Dr, Seattle, WA</TableCell>
                    <TableCell>555-6789</TableCell>
                    <TableCell>2023-10-20</TableCell>
                    <TableCell class="truncate">Scheduled meeting for 2023-10-25</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>



    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>



    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
 



    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
 



    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>




    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
    
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>

    <

