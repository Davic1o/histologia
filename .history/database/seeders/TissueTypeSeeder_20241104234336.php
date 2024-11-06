<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TissueTypeSeeder extends Seeder
{
    public function run()
    {
        $tissueTypes = [
            ['id' => 'TEJ001', 'name' => 'Tejido Epitelial'],
            ['id' => 'TEJ002', 'name' => 'Tejido Conectivo'],
            ['id' => 'TEJ003', 'name' => 'Tejido Muscular'],
            ['id' => 'TEJ004', 'name' => 'Tejido Nervioso'],
        ];

        DB::table('tissues')->insert($tissueTypes);
    }
}
